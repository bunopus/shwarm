/**
 * Mocking client-server processing
 */
const _entries = [
  {'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2}
]

export default {
  getEntries (cb) {
    setTimeout(() => cb(_entries), 100)
  }
}
