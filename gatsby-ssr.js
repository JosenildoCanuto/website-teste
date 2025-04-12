// gatsby-ssr.js (na raiz do seu projeto)
import React from "react";

/**
 * Implementação do wrapRootElement para SSR
 * Deve ser IDÊNTICO ao do gatsby-browser.js
 */
export const wrapRootElement = ({ element }) => ({ element });
