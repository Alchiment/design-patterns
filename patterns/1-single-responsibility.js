// Resposibility: Set the objetive structure through. 
class Objective {
    constructor() {
        this.name = '';
        this.progress = 0;
    }

    setName(name) {
        this.name = name;
    }

    setProgress(progress) {
        if (progress < 0 || progress > 100) {
            throw new Error('Progress must be between 0 and 100');
        }
        this.progress = progress;
    }
}

// Resposibility: Store milestones. 
class Milestone {
    constructor() {
        this.objectives = [];
    }

    addObjective(record) {
        const objective = new Objective();
        objective.setName(record.name);
        objective.setProgress(record.progress);
        this.objectives.push(objective);
    }
}

// Resposibility: Print milestones.
class MilestonePrinter {
    static print(milestone) {
        console.table(milestone.objectives, ['name', 'progress']);
    }
}

const milestone = new Milestone();
milestone.addObjective({ name: 'Objective 1', progress: 50 });
milestone.addObjective({ name: 'Objective 2', progress: 100 });
milestone.addObjective({ name: 'Objective 3', progress: 75 });

MilestonePrinter.print(milestone);