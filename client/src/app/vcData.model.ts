export class VcData {
    _id: number;
    VCName: string = '';
    Location: string = '';
    InvestmentFocus: string = '';
    PreferedIndication: string = '';
    InvestmentStage: string = '';
    Featured: string = '';
    Research: any = {};
    FundStatus: string = '';
    IndustryPartner: string = '';
    SpecialCriteria: string = '';
    Website: string = '';
    fileUrl: string = '';
    fileName: string = '';

    clear() {
        delete this._id;
        this.VCName = '';
        this.Location = '';
        this.InvestmentFocus = '';
        this.PreferedIndication = '';
        this.InvestmentStage = '';
        this.Featured = '';
        this.Research = {};
        this.IndustryPartner = '';
        this.FundStatus = '';
        this.SpecialCriteria = '';
        this.Website = '';
        this.fileUrl = '';
        this.fileName = '';
    }
}
