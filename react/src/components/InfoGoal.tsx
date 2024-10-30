import {Card, ProgressBar} from "react-bootstrap";

interface InfoGoalProps {
    name: string;
    progress: number;
    description: string;
    className?: string;
}

export default function InfoGoal({ name, progress, description, className }: InfoGoalProps) {
    return (
        <Card className={className}>
            <Card.Header>
                <div className="info-goal__wrapper--title">
                    <Card.Title>{name}</Card.Title>
                    <div className="align-horizontally-center">
                        <ProgressBar now={progress || 0} />
                        <span className="margin-left__1">
                                {progress}% Complete
                            </span>
                    </div>
                </div>
            </ Card.Header>
            <Card.Body>
                <div>
                    {description}
                </div>
            </Card.Body>
        </Card>
    );
};
