
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

        contractOwner: 'placeholder',
        contractAddress: 'placeholder'
    }
   
}
  
export default OpenSea;