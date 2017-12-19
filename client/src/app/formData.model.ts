export class FormData {
    _id: number;
    name: string = '';
    role: string = '';
    organization: string = '';
    telephone: number = null;
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
    technology: string = '';
    programDescription: string = '';
    comments: string = '';
    fileUrl: string = '';
    fileName: string = '';
    createdBy: string = '';
    views: number = null;
    likedBy: any = [];
    viewedBy: any = [];

    clear() {
        delete this._id;
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
        this.technology = '';
        this.programDescription = '';
        this.comments = '';
        this.fileUrl = '';
        this.fileName = '';
        this.createdBy = '';
        delete this.views;
        this.likedBy = [];
        this.viewedBy = [];
    }
}

export class Personal {
    _id: number;
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
    technology: string = '';
    programDescription: string = '';
    comments: string = '';
    fileName: string = '';
}