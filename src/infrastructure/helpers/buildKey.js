const buildKey = ({ url, method }) => `${method}|${url}`;

export default buildKey;
