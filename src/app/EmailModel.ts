export class Email {
    constructor (
        public name: string,
        public _replyto: string,
        public message: string,
        public phone: string,
        public _subject: string,
        public _after: string,
        public _honeypot = ''
    ){ }
}