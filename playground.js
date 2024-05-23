/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let weapon_nfts_wallet = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, rarity, type, damage, range, fire_rate) {
    const new_weapon = {
        name: name,
        rarity: rarity,
        type: type,
        damage: damage,
        range: range,
        fire_rate: fire_rate
    };
    weapon_nfts_wallet.push(new_weapon);
    console.log("Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\n");
    for (let i = 0; i<weapon_nfts_wallet.length; i++){
        const nft = weapon_nfts_wallet[i];
        console.log(`Weapon: ${nft.name}`);
        console.log(`Rarity: ${nft.rarity}`);
        console.log(`Type: ${nft.type}`);
        console.log(`Damage: ${nft.damage} damage/hit`);
        console.log(`Range: ${nft.range} meters`);
        console.log(`Fire Rate: ${nft.fire_rate} rounds/sec`)
        console.log("\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return weapon_nfts_wallet.length;
}

// call your functions below this line

mintNFT("Desert Eagle", "Legendary", "Pistol", 63, 50, 0.5);
mintNFT("AK-47", "Epic", "Assault Rifle", 35, 300, 10);
mintNFT("AWP", "Legendary", "Sniper Rifle", 115, 1000, 1);
mintNFT("M4A1-S", "Rare", "Assault Rifle", 33, 250, 9);
mintNFT("USP-S", "Common", "Pistol", 35, 40, 6);
mintNFT("Glock-18", "Common", "Pistol", 28, 40, 6.75);
mintNFT("P90", "Common", "SMG", 26, 200, 15);
mintNFT("MP7", "Rare", "SMG", 29, 150, 11);
mintNFT("FAMAS", "Rare", "Assault Rifle", 30, 250, 9);
mintNFT("Galil AR", "Common", "Assault Rifle", 35, 300, 9);
mintNFT("SCAR-20", "Epic", "Sniper Rifle", 80, 900, 2.5);
mintNFT("MAG-7", "Common", "Shotgun", 72, 15, 1.2);
mintNFT("M249", "Epic", "LMG", 32, 350, 10);


listNFTs();

const totalNFTs = getTotalSupply();
console.log("Total Supply: " + totalNFTs);