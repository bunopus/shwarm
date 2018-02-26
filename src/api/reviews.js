/**
 * Mocking client-server processing
 */
const _reviews = [
  {'id': 1, 'title': 'Шавуха в гостинке', 'score': 4},
  {'id': 2, 'title': 'Опражка', 'score': 3}
]

export default {
  getReviews (cb) {
    setTimeout(() => cb(_reviews), 500)
  }
}
