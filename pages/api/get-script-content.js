import { fetch } from 'node-fetch';

export default async function handler(req, res) {
    // Replace with your Google Apps Script Web App URL
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzcA60vtPiYMBc2pVwmjCFGbg74dI11PqkrwWJabOKfE3pXeyHsx4weCUUaORcqE8_8vw/exec'; 

    const response = await fetch(scriptUrl);
    const scriptContent = await response.text(); // Assumes the script returns plain HTML

    res.status(200).send(scriptContent); 
}
