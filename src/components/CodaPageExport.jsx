import { set } from 'lodash';
import React, { useState, useEffect } from 'react';


// Coda API endpoint configuration
const CODA_API_BASE_URL = 'https://coda.io/apis/v1';

const CodaPageExport = ({docId, pageId}) => {
  const [exportStatus, setExportStatus] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Start the export process
  const startExport = async () => {
    console.log(import.meta.env.VITE_APP_CODA_API_TOKEN)
    setLoading(true);
    try {
      const response = await fetch(
        `${CODA_API_BASE_URL}/docs/${docId}/pages/${pageId}/export`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_CODA_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({"outputFormat": "html"}), // Change to "html" if desired
        }
      );

      if (!response.ok) {
        throw new Error('Failed to initiate export');
      }

      const { id, href } = await response.json();
      setExportStatus({ id, href });

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Check the status of the export
  const checkExportStatus = async () => {
    try {
      const response = await fetch(exportStatus.href, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_CODA_API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch export status');
      }

      const data = await response.json();
      if (data.status === 'complete') {
        fetchExportedContent(data.downloadLink);
      } else {
        setTimeout(checkExportStatus, 1000); // Poll every second until export completes
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch the exported content using the downloadLink
  const fetchExportedContent = async (downloadLink) => {
    try {
      const response = await fetch(downloadLink);
      const text = await response.text();
      setContent(text);
    } catch (err) {
      setError('Failed to fetch exported content');
    } finally {
      setLoading(false);
    }
  };

  // Handle export initiation and status polling
  useEffect(() => {
    if (exportStatus && exportStatus.href) {
      checkExportStatus();
    }
  }, [exportStatus]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Coda Page Export</h1>

      {/* Export initiation button */}
      <button onClick={startExport} disabled={loading}>
        {loading ? 'Exporting...' : 'Start Export'}
      </button>

      <button onClick={startExport} disabled={loading}>
        {loading ? 'Exporting...' : 'Start Export'}
      </button>


      {/* Display error messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display exported content */}
      {content && (
        <div
          style={{
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h2>Exported Content</h2>
          <pre>{content}</pre>
        </div>
      )}
    </div>
  );
};


const CodaPageExport2 = ({ docId, pageId }) => {
  const [exportStatus, setExportStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null)
  const [codaDoc, setCodaDoc] = useState(null)

  const startExport = async () => {
    console.log(import.meta.env.VITE_APP_CODA_API_TOKEN);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${CODA_API_BASE_URL}/docs/${docId}/pages/${pageId}/export`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_APP_CODA_API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ outputFormat: 'html' }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to initiate export');
      }

      const { id, href } = await response.json();
      setExportStatus({ id, href });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(toggle);
    }
  };

  const printCodaDoc = async (downloadLink) => {
    setCodaDoc(exportStatus ? exportStatus.href : 'Click Start Export')
    try {
      const response = await fetch(downloadLink);
      const text = await response.text();
      console.log(response.text())
      console.log(response)
      // setCodaDoc(cleanHtmlContent(text));
      setCodaDoc(text);
    } catch (err) {
      setError('Failed to fetch exported content');
    } finally {
      setLoading(false);
    }
  }

  const checkExportStatus = async () => {
    if (!exportStatus) {
      setStatus('Click Start Export')
      return
    }
    
    try {
      const response = await fetch(exportStatus.href, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_CODA_API_TOKEN}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch export status');
      }

      const data = await response.json();
      if (data.status === 'complete') {
        // fetchExportedContent(data.downloadLink);
        setStatus(data.downloadLink)
      } else {
        setStatus('Wait more time'); // Poll every second until export completes
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Coda Page Export</h1>
      <button onClick={startExport} disabled={loading}>
        {loading ? 'Exporting...' : 'Start Export'}
      </button>

      <button onClick={checkExportStatus}>
        Check Status
      </button>
      <div>
        {/* <p><strong>Status:</strong> <a href={status} target="_blank" rel="noopener noreferrer"></a> </p> */}
        <p><strong>Status:</strong> {status}</p>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {exportStatus && (
        <div>
          <p><strong>Export ID:</strong> {exportStatus.id}</p>
          <p><strong>Export Href:</strong> <a href={exportStatus.href} target="_blank" rel="noopener noreferrer">{exportStatus.href}</a></p>
        </div>
      )}
      <button onClick={printCodaDoc}>
        Print Coda Doc
      </button>
      <div>
        {codaDoc}
      </div>

      <div>
        <h1>HTML Content from S3</h1>
        <div
          dangerouslySetInnerHTML={{ __html: codaDoc }}
          style={{ border: '1px solid #ccc', padding: '10px' }}
        />
      </div>


      
    </div>
  );
};

export default CodaPageExport2;