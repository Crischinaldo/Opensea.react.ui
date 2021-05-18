
const OpenSea = {
    endpoints: {
        collection: {
            url: 'https://api.opensea.io/api/v1/collections/'
        },

        asset: {
            url: 'https://api.opensea.io/api/v1/asset/{asset_contract_address}/{token_id}/'
        },

        assets: {
            url: 'https://api.opensea.io/api/v1/assets/'
        },
    },
    contractAddress: '0x495f947276749ce646f68ac8c248420045cb7b5e',
    walletAddress: '0x8daa7a15071c95cdee2b6274ad1dd5c1c3c5e285'
   
}
  
export default OpenSea;