# St Austell Service Point landing page

Upload `index.html` and the `assets` folder together. Configure `staustell.servicepoint-volunteers.com` in your DNS and hosting service to serve this folder over HTTPS.

The visual artwork is a design mockup. The two pictured volunteers are illustrative, and some artwork text is embedded in the image. Replace the volunteer picture with approved photographs and confirm the Kernow Credit Union relationship wording before public launch.

The contact button is deliberately disabled until a secure message destination is configured. In `index.html`, set `FORM_ENDPOINT` to your tested endpoint that accepts a JSON POST and sends or stores the message for the designated St Austell volunteers. Do not publish a working contact button until you have tested receipt and agreed who receives submissions. Update the accompanying data-use text to identify that recipient.

The proposed QR destination is `https://staustell.servicepoint-volunteers.com/`. Test it on a phone after DNS, HTTPS, and the contact flow are live, before changing or printing the cube QR code.
