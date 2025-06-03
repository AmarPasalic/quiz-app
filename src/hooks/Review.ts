

const Revive = async () => {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            "https://quiz-be-zeta.vercel.app/game/revive",
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
            return { success: false, message: data.message || "Error fetching user" };
        }

        return { success: true, user: data };
    }
    catch (error) {
        console.error("Error fetching user:", error);
        return { success: false, message: "Network error" };
    }
}

export default Revive