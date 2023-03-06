const QRCode = require('qrcode');
const prompt = require('prompt-sync')();

const SUCCESS_MSG = 'QR CODE generated successfully';

const generateToImage = async () => {
    try {
        const text = prompt('Enter the text: ');
        await QRCode.toFile('./qr-code.png', text);
        console.log(SUCCESS_MSG);
    } catch (e) {}
}

const generateToTerminal = async () => {
    try {
        const text = prompt('Enter the text: ');
        const code = await QRCode.toString(text, { type: 'terminal' });
        console.log(code);
        console.log(SUCCESS_MSG);
    } catch (e) {}
}

const generateQRCode = async () => {
    let choice = 0;

    do {
        console.log('1. Generate to image');
        console.log('2. Generate to terminal');
        console.log('3. EXIT THE PROGRAM');

        choice = prompt('CHOOSE AN OPTION: ');

        switch(parseInt(choice, 10)) {
            case 1:
                await generateToImage();
                choice = 0;
            break;
            case 2:
                await generateToTerminal();
                choice = 0;
            break;
            case 3:
                choice = 0;
            break;
            default:
                console.log('Please select a correct option');
        }
    } while (choice !== 0);
}

generateQRCode();
