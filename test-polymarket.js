cat << 'EOF' > test-polymarket.js
const fetchMarketData = async () => {
    const url = 'https://polymarket.com';
    try {
        console.log("🔄 Fetching live sentiment from Polymarket Gamma API...");
        const response = await fetch(url, {
            headers: { 'Accept': 'application/json' }
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        console.log("\n✅ Successfully connected to Polymarket API!");
        console.log("-----------------------------------------------");
        data.forEach((market, index) => {
            console.log(`[Market #${index + 1}]`);
            console.log(`📌 Question: ${market.question || 'N/A'}`);
            console.log(`📊 Status: ${market.active ? 'Active' : 'Closed'}`);
            console.log("-----------------------------------------------");
        });
    } catch (error) {
        console.error("❌ Failed:", error.message);
    }
};
fetchMarketData();
EOF
