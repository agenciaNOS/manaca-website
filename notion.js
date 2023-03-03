const { Client } = require('@notionhq/client');

const notion = new Client({ auth: secret_cEiDB30GhgYFulHDCJk8SkPO7KvAm4EgYKCDsCP9TB0 });

(async () => {
  const blockId = 'c02fc1d3-db8b-45c5-a222-27595b15aea7';
  const response = await notion.blocks.retrieve({
    block_id: blockId,
  });
  console.log(response);
})();