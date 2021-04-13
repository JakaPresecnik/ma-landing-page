import { useEffect, useState } from "react";

function GithubContribution () {
    const [githubContributions, setContributions] = useState({});
    const monthString = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        const today = new Date();
        const thisMonth = today.getMonth();
        const thisYear = today.getFullYear();

        let data = {...githubContributions};
        fetch('https://api.github.com/users/jakapresecnik/events?per_page=100')
        .then(res => res.json())
        .then(json => json.forEach(commit => {
                
                    let monthOfCommit = new Date(commit.created_at).getMonth();
                    let date = new Date(commit.created_at).getDate();
                    data[monthString[monthOfCommit]] = data[monthString[monthOfCommit]] ? {...data[monthString[monthOfCommit]]} : {};
                    data[monthString[monthOfCommit]][date.toString()] = data[monthString[monthOfCommit]][date.toString()] ? data[monthString[monthOfCommit]][date.toString()] + 1 : 1;
                
            }

        ))
        .then(console.log(data))
    }, [])

    
    return (
        <div>
            {/* {githubContributions.map(contribution => (
                // <p key={contribution}>{contribution}</p>
            ))} */}
            yellow
        </div>
    )
}
export default GithubContribution;