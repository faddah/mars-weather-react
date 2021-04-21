const formattedDate = (timestamp) => {
    const weekdays = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];
    const months = [
        "Jan.",
        "Feb.",
        "Mar.",
        "Apr.",
        "May",
        "Jun.",
        "Jul.",
        "Aug.",
        "Sep.",
        "Oct.",
        "Nov.",
        "Dec.",
    ];
    const weekday = weekdays[timestamp.getDay()];
    const monthDate = timestamp.getDate();
    const month = months[timestamp.getMonth()];
    const year = timestamp.getFullYear();
    const hour = timestamp.getHours();
    const minutes = timestamp.getMinutes();
    const seconds = timestamp.getSeconds();
    return `${weekday}, ${monthDate}-${month}-${year}<br />${hour}:${minutes}:${seconds}GMT`;
};

export default formattedDate;