import { map, Observable, Subject, Subscription } from 'rxjs';
import { useEffect, useState } from 'react';

import { IBillResult } from '../interfaces/bill-result.interface';
import { IInputPanelData } from '../interfaces/input-panel-data.interface';

function onEmit<T>(source$:Observable<T>, nextFn:(value: T) => void): Subscription {
    return source$.subscribe(nextFn, console.error);
}

const panelData$$ = new Subject<IInputPanelData>();

const panelData$ = panelData$$.pipe(
    map(({ billValue,  tipValue, peopleAmount}) => {
        if (billValue && tipValue && peopleAmount) {
            const tip = (billValue / 100) * tipValue;
            const total = billValue + tip;
            return { total: total / peopleAmount, tipAmount: tip / peopleAmount };
        } else {
            return null
        }
    })
)

const notifier$$ = new Subject<void>();

const handleReset = () => {
    notifier$$.next();
}

export const useCalculatorFacade = (): [IBillResult | null, (value: IInputPanelData) => void, Subject<void>, () => void] => {
    const [result, setResult] = useState<IBillResult | null>(null);

    useEffect(() => {
        const sub = onEmit<IBillResult | null>(panelData$, (result) => setResult(result));
        return () => sub.unsubscribe();
    }, [])

    const calculateResult = (value: IInputPanelData) => {
        panelData$$.next(value);
    }

    return [result, calculateResult, notifier$$, handleReset];
}
