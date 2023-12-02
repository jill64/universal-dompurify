import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

export default DOMPurify(new JSDOM().window)
