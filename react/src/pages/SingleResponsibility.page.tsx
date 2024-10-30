import {INFO_GOAL_ITEMS} from "../../../common/constants/info-goal-items.constant.ts";
import {useState} from "react";
import InfoGoal from "../components/InfoGoal.tsx";

export default function SingleResponsibilityPage() {
    const [goals] = useState(INFO_GOAL_ITEMS);

    return (
        <>
            {goals.map(goal => (
                <InfoGoal key={goal.id}
                          className="mt-2"
                          name={goal.name}
                          progress={goal.progress}
                          description={goal.description} />
            ))}
        </>
    );
}