export default (value = '', limit = 250) => {
  return value.length > limit ? value.slice(0, limit) + '...' : value
}
