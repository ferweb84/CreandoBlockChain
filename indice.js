const Blockchain = require("./src/blockchain");
// const Block = require("./src/block");
const blockchain = new Blockchain();

for (let i = 0; i < 10; i++) {
  const block = blockchain.addBlock(`Block ${i}`);
  console.log(block.toString());
}

// async function run(){
//     const blockchain = await new Blockchain();
//     const block1 = new Block({ data: "Block #1"});
//     const block2 = new Block({ data: "Block #2"});
//     const block3 = new Block({ data: "Block #3"});

//     await blockchain.addBlock(block1);
//     await blockchain.addBlock(block2);
//     await blockchain.addBlock(block3);

//     blockchain.print();

// }

// run();