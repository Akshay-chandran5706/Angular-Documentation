import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CodeBlockService {
    copyText(text: string) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Copied!');
        }).catch(err => {
            console.error('Failed to copy!', err);
        });
    }
}