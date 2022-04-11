import { Provider } from "@angular/core";
import { AdviceService } from "@core/services/advice.service";

export const adviceProvider: Provider = {
    provide: 'adviceRepository',
    useClass: AdviceService
}