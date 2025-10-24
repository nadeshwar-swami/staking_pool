export interface AppState {
    app_id: number;
    asset_id: number;
}

export interface StakePeriod {
    days: number;
    apr: number;
    value: string;
}

export interface StakePosition {
    amount: string;
    startDate: string;
    endDate: string;
    reward: string;
    isClaimable: boolean;
    apr: number;
}

export interface StakeError {
    type: 'insufficient_balance' | 'user_rejected' | 'transaction_failed' | 'fetch_error';
    message: string;
}