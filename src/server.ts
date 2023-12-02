import DOMPurify from 'dompurify'
import { Window } from 'happy-dom'

// @ts-expect-error Fuzzy type matching
export default DOMPurify(new Window())
