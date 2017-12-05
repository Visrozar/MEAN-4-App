export class FormData {
    name: string = '';
    role: string = '';
    organization: string = '';
    telephone: number;
    email: string = '';
    website: string = '';
    work: string = '';
    dealName: string = '';
    location: string = '';
    sector: string = '';
    indication: string = '';
    stageLead: string = '';
    financing: string = '';
    investment: string = '';
    techonology: string = '';
    programDescription: string = '';
    comments: string = '';

    clear() {
        this.name = '';
        this.organization = '';
        delete this.telephone;
        this.website = '';
        this.role = '';
        this.email = '';
        this.work = '';
        this.dealName = '';
        this.location = '';
        this.sector = '';
        this.indication = '';
        this.stageLead = '';
        this.financing = '';
        this.investment = '';
        this.techonology = '';
        this.programDescription = '';
        this.comments = '';
    }
}

export class Personal {
    name: string = '';
    role: string = '';
    organization: string = '';
    telephone: number;
    website: string = '';
    email: string = '';
}

export class Deal {
    dealName: string = '';
    location: string = '';
    sector: string = '';
    indication: string = '';
    stageLead: string = '';
    financing: string = '';
    investment: string = '';
    techonology: string = '';
    programDescription: string = '';
    comments: string = '';
}