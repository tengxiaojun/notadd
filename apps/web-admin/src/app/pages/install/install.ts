import { Component } from '@angular/core'
interface InstallStep {
    title: string;
}
@Component({
    selector: 'admin-install-page',
    templateUrl: './install.html',
    styleUrls: ['./install.scss']
})
export class WebAdminInstallPage {
    current = 0;
    steps: InstallStep[] = [{
        title: '管理员'
    }, {
        title: '数据库'
    }, {
        title: '子模块'
    }];

    pre(): void {
        this.current -= 1;
    }

    next(): void {
        this.current += 1;
    }

    done(): void {
        console.log('done');
    }
}
