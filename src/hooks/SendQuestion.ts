

const SendQuestion = async (gameId:string, questionId:string,answer:string) => {
 try{
    const token = localStorage.getItem("token");
    const response = await fetch(
        "/api/game/answer",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                "gameId": gameId,
                "questionId": questionId,
                "answer": answer
            })
        }
    )
    const data = await response.json();

    if (!response.ok) {
        return { success: false, message: data.message || "Error sending question" };
    }

    return { success: true, res: data };
 }
    catch (error) {
        console.error("Error sending question:", error);
        return { success: false, message: "Network error" };
    }
}

export default SendQuestion