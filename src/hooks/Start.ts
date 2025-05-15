
const Start = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            "https://quiz-be-zeta.vercel.app/game/start",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Error fetching start" };
        }

        return { success: true, start: data };
    }
    catch (error) {
        console.error("Error fetching start:", error);
        return { success: false, message: "Network error" };
    }
}

export default Start