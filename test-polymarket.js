// GTM-AI Dashboard - Polymarket API Test Script
// Running on Node.js environment

const fetchMarketData = async () => {
    const url = 'https://polymarket.com';
    
    try {
        console.log("🔄 Fetching live sentiment and market data from Polymarket...");
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Take the first 3 active markets for testing output
        const sampleMarkets = data.slice(0, 3);
        
        console.log("\n✅ Successfully connected to Polymarket API!");
        console.log("-----------------------------------------------");
        
        sampleMarkets.forEach((market, index) => {
            console.log(`[Market #${index + 1}]`);
            console.log(`📌 Question: ${market.question}`);
            console.log(`📊 Status: ${market.active ? 'Active' : 'Closed'}`);
            console.log(`💰 Tokens: ${market.tokens ? market.tokens.map(t => t.outcome).join(' vs ') : 'N/A'}`);
            console.log("-----------------------------------------------");
        });

    } catch (error) {
        console.error("❌ Failed to fetch data from Polymarket API:", error.message);
    }
};

// Execute the test function
fetchMarketData();

