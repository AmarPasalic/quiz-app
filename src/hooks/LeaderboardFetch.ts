

const LeaderboardFetch = async () => {
    try {
        const response = await fetch(
            "/api/leaderboard",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Error fetching leaderboard" };
        }

        return { success: true, leaderboard: data};
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        return { success: false, message: "Network error" };
    }
}

export default LeaderboardFetch