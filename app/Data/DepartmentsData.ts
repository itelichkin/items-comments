import {InMemoryDbService} from 'angular-in-memory-web-api';

export class ItemsData implements InMemoryDbService {
    createDb() {
        let employees = [
            {
                "id": 1,
                "name": "Peter",
                "count": [
                    {
                        "department": 23
                    }
                ]
            },
            {
                "id": 2,
                "name": "Ivan",
                "count": [
                    {
                        "department": 23
                    }
                ]
            },
            {
                "id": 3,
                "name": "Jack",
                "count": [
                    {
                        "department": 22
                    }
                ]
            },
            {
                "id": 4,
                "name": "Olivia",
                "count": [
                    {
                        "department": 22
                    }
                ]
            }
        ];
        let departments = [
            {
                "id": 1,
                "name": "Department of Politics and International Studies"
            },
            {
                "id": 10,
                "name": "Department of Architecture "
            },
            {
                "id": 22,
                "name": "Department of Veterinary Medicine"
            },
            {
                "id": 23,
                "name": "Main Department"
            },

        ];
        return {employees, departments};
    }
}