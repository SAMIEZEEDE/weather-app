/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-weathersearch',
  templateUrl: './weathersearch.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class weathersearchComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_HvWjJz1ujlqLqqzT(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_HvWjJz1ujlqLqqzT(bh) {
    try {
      bh = this.sd_Y4MrP83HmX7QbObo(bh);
      //appendnew_next_sd_HvWjJz1ujlqLqqzT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HvWjJz1ujlqLqqzT');
    }
  }

  updateLog(logobject: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { logobject: logobject };
      bh.local = {};
      bh = this.sd_ogZftGqnZ2dcmCkZ(bh);
      //appendnew_next_updateLog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_t3mmB5VkRk2Nwihg');
    }
  }

  processWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = {};
      bh = this.sd_iK9uMpkF1psgOp50(bh);
      //appendnew_next_processWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mEXzJNtOz2f05DWh');
    }
  }

  getWeather(cityName: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { cityName: cityName };
      bh.local = { ssdWeatherApiUrl: undefined };
      bh = this.cityNameNullCheck(bh);
      //appendnew_next_getWeather
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_touiFKAAMUuEProU');
    }
  }

  //appendnew_flow_weathersearchComponent_start

  sd_Y4MrP83HmX7QbObo(bh) {
    try {
      this.page.searchString = undefined;
      this.page.logArray = [];
      //appendnew_next_sd_Y4MrP83HmX7QbObo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Y4MrP83HmX7QbObo');
    }
  }

  sd_ogZftGqnZ2dcmCkZ(bh) {
    try {
      const page = this.page;
      page.logArray.push(bh.input.logobject);
      //appendnew_next_sd_ogZftGqnZ2dcmCkZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ogZftGqnZ2dcmCkZ');
    }
  }

  sd_iK9uMpkF1psgOp50(bh) {
    try {
      const page = this.page;
      this.page.showCard =
        typeof this.page.weatherdata === 'object' &&
        Object.keys(this.page.weatherdata).length > 2;
      bh = this.sd_9w9Gz20GzkZbhg3w(bh);
      //appendnew_next_sd_iK9uMpkF1psgOp50
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iK9uMpkF1psgOp50');
    }
  }

  async sd_9w9Gz20GzkZbhg3w(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          this.page.showCard,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.errorLog(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jeosSmWZt3zOPdcn(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9w9Gz20GzkZbhg3w');
    }
  }

  errorLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.input.errorlog);

      //appendnew_next_errorLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fSWdpVMZTBrk3wOl');
    }
  }

  sd_jeosSmWZt3zOPdcn(bh) {
    try {
      const page = this.page;
      localStorage.lastCity = bh.input.cityName;
      bh.input.successlog = {
        type: 'info',
        message:
          'Successfully Retrieved the Weather Data for city: ' +
          bh.input.cityName,
      };
      bh = this.successLog(bh);
      //appendnew_next_sd_jeosSmWZt3zOPdcn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jeosSmWZt3zOPdcn');
    }
  }

  successLog(bh) {
    try {
      let outputVariables = this.updateLog(bh.successlog);

      //appendnew_next_successLog
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oyK5O6MZy3jHq72e');
    }
  }

  sd_Vhynn0szBFgmFOIC(bh) {
    try {
      const page = this.page;
      bh.input.errorlog = {
        type: 'error',
        message: `Weather Data Not Found${
          bh.input.cityName ? ` For the City: ${bh.input.cityName}` : ''
        }!`,
      };
      bh = this.errorLog(bh);
      //appendnew_next_sd_Vhynn0szBFgmFOIC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vhynn0szBFgmFOIC');
    }
  }

  cityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.snackbar(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gFb4TTnM6umHvtdR(bh);
      }

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iDIGwZrtANCQG6Vn');
    }
  }

  snackbar(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('invalid City Name', 'Okay', {
          duration: 2000,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_snackbar
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J6OP9SHtLWodc8q3');
    }
  }

  sd_gFb4TTnM6umHvtdR(bh) {
    try {
      const page = this.page;
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;
      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = this.callServerFlow(bh);
      //appendnew_next_sd_gFb4TTnM6umHvtdR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gFb4TTnM6umHvtdR');
    }
  }

  async callServerFlow(bh) {
    try {
      let requestOptions = {
        url: bh.local.ssdWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: bh.local.qparams,
        body: undefined,
      };
      this.page.weatherdata = await this.sdService.nHttpRequest(requestOptions);
      bh = this.callProcessWeather(bh);
      this.ssdWeatherApiUrl(bh);
      //appendnew_next_callServerFlow
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_77qgPHhJpA3QMlgk');
    }
  }

  callProcessWeather(bh) {
    try {
      let outputVariables = this.processWeather(bh.input.cityName);

      //appendnew_next_callProcessWeather
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7If9HBcF7tIUsxIa');
    }
  }

  ssdWeatherApiUrl(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local);
      //appendnew_next_ssdWeatherApiUrl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RN6UD9vGjANpn394');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_IJpWKm7PIMNXJot4(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_IJpWKm7PIMNXJot4(bh) {
    const nodes = ['sd_77qgPHhJpA3QMlgk'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_Vhynn0szBFgmFOIC(bh);
      //appendnew_next_sd_IJpWKm7PIMNXJot4
      return true;
    }
    return false;
  }
  //appendnew_flow_weathersearchComponent_Catch
}
