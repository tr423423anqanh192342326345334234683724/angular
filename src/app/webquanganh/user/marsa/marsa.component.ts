import { Component } from '@angular/core';
import * as forge from 'node-forge';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marsa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marsa.component.html',
  styleUrls: ['./marsa.component.css']
})
export class MarsaComponent {
  publicKey: string = '';
  privateKey: string = '';
  message: string = '';
  result: string = '';

  constructor() {
    this.generateKeys();
  }

  generateKeys() {
    const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048, e: 0x10001 });
    this.publicKey = forge.pki.publicKeyToPem(keypair.publicKey);
    this.privateKey = forge.pki.privateKeyToPem(keypair.privateKey);
  }

  encrypt() {
    const publicKey = forge.pki.publicKeyFromPem(this.publicKey);
    const encrypted = publicKey.encrypt(this.message, 'RSA-OAEP');
    this.result = forge.util.encode64(encrypted);
  }

  decrypt() {
    const privateKey = forge.pki.privateKeyFromPem(this.privateKey);
    const encrypted = forge.util.decode64(this.result);
    const decrypted = privateKey.decrypt(encrypted, 'RSA-OAEP');
    this.message = decrypted;
  }
}
