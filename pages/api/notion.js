const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  const data = await req.body;
  const JSONformatedData = JSON.parse(data);
  const formatedData = {
    Nome: {
      title: [
        {
          text: {
            content: JSONformatedData.Name,
          },
        },
      ],
    },
    Email: {
      email: JSONformatedData.Email,
    },
    Telefone: {
      rich_text: [
        {
          text: {
            content: JSONformatedData.telephone,
          },
        },
      ],
    },
    Serviço: {
      multi_select: [
        {
          name: JSONformatedData.serviceType,
        },
      ],
    },
  };

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        ...formatedData,
      },
    });
  } catch (error) {
    if (error.code === 'unauthorized') {
      console.error('Unauthorized: the provided API key is invalid');
    } else {
      console.error(error)
    }
  }

  res.status(200).json({ message: 'Success' });
}
