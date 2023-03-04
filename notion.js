const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { name, email, telephone, message } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      // body: JSON.stringify({ name: 'John Doe', email: 'teste@email.com', telephone: '999999999', message: 'Mensagem de teste' })
      // {"msg":"There was an error","error":{"name":"APIResponseError","code":"validation_error","status":400,"headers":{},"body":"{\"object\":\"error\",\"status\":400,\"code\":\"validation_error\",\"message\":\"body failed validation. Fix one:\\nbody.properties.Telephone.title should be an array, instead was `\\\"999999999\\\"`.\\nbody.properties.Telephone.rich_text should be defined, instead was `undefined`.\\nbody.properties.Telephone.number should be defined, instead was `undefined`.\\nbody.properties.Telephone.url should be defined, instead was `undefined`.\\nbody.properties.Telephone.select should be defined, instead was `undefined`.\\nbody.properties.Telephone.multi_select should be defined, instead was `undefined`.\\nbody.properties.Telephone.people should be defined, instead was `undefined`.\\nbody.properties.Telephone.email should be defined, instead was `undefined`.\\nbody.properties.Telephone.phone_number should be defined, instead was `undefined`.\\nbody.properties.Telephone.date should be defined, instead was `undefined`.\\nbody.properties.Telephone.checkbox should be defined, instead was `undefined`.\\nbody.properties.Telephone.relation should be defined, instead was `undefined`.\\nbody.properties.Telephone.files should be defined, instead was `undefined`.\\nbody.properties.Telephone.status should be defined, instead was `undefined`.\\nbody.properties.Name.id should be defined, instead was `undefined`.\\nbody.properties.Name.name should be defined, instead was `undefined`.\\nbody.properties.Name.start should be defined, instead was `undefined`.\"}"}}
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Telephone: {
            title: telephone,
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    res.status(500).json({ msg: 'There was an error' });
  }
}
