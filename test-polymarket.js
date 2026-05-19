cat << 'EOF' > test-polymarket.js
const fetchMarketData = async () => {
    const url = 'https://polymarket.com';
    try {
        console.log("🔄 Fetching live sentiment and market data from Polymarket Gamma API...");
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const sampleMarkets = data.slice(0, 3);
        console.log("\n✅ Successfully connected to Polymarket API!");
        console.log("-----------------------------------------------");
        sampleMarkets.forEach((market, index) => {
            console.log(`[Market #${index + 1}]`);
            console.log(`📌 Question: ${market.title || market.question || 'N/A'}`);
            console.log(`📊 Status: ${market.active ? 'Active' : 'Closed'}`);
            console.log(`💰 Category: ${market.category || 'N/A'}`);
            console.log("-----------------------------------------------");
        });
    } catch (error) {
        console.error("❌ Failed to fetch data from Polymarket API:", error.message);
    }
};
fetchMarketData();
EOF

