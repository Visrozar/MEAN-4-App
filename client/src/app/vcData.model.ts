export class VcData {
    VCName: string = '';
    Location: string = '';
    InvestmentFocus: any = [];
    PreferedIndication: string = '';
    InvestmentStage: any = [];
    Featured: string = '';
    Research: any = {};
    FundStatus: string = '';
    IndustryPartner: string = '';
    SpecialCriteria: string = '';
    Website: string = '';
    fileUrl: string = '';
    fileName: string = '';

    clear() {
        this.VCName = '';
        this.Location = '';
        this.InvestmentFocus = [];
        this.PreferedIndication = '';
        this.InvestmentStage = [];
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
