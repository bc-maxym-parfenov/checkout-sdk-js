export default class InstrumentRequestSender {
    /**
     * @constructor
     * @param {BigpayClient} client
     */
    constructor(client) {
        this._client = client;
    }

    /**
     * @param {string} storeId
     * @param {string} shopperId
     * @return {Promise<Response<VaultAccessTokenResponseBody>>}
     */
    getVaultAccessToken(storeId, shopperId) {
        return new Promise((resolve, reject) => {
            const payload = { storeId, shopperId };

            this._client.getVaultAccessToken(payload, (error, response) => {
                if (error) {
                    reject(this._transformResponse(error));
                } else {
                    resolve(this._transformResponse(response));
                }
            });
        });
    }

    /**
     * @param {string} storeId
     * @param {string} shopperId
     * @param {string} authToken
     * @return {Promise<Response<InstrumentsResponseBody>>}
     */
    getInstruments(storeId, shopperId, authToken) {
        const payload = { storeId, shopperId, authToken };

        return new Promise((resolve, reject) => {
            this._client.getShopperInstruments(payload, (error, response) => {
                if (error) {
                    reject(this._transformResponse(error));
                } else {
                    resolve(this._transformResponse(response));
                }
            });
        });
    }

    /**
     * @param {string} storeId
     * @param {string} shopperId
     * @param {string} authToken
     * @param {InstrumentRequestBody} instrument
     * @return {Promise<Response<InstrumentResponseBody>>}
     */
    vaultInstrument(storeId, shopperId, authToken, instrument) {
        const payload = {
            storeId,
            shopperId,
            authToken,
            instrument,
        };

        return new Promise((resolve, reject) => {
            this._client.postShopperInstrument(payload, (error, response) => {
                if (error) {
                    reject(this._transformResponse(error));
                } else {
                    resolve(this._transformResponse(response));
                }
            });
        });
    }

    /**
     * @param {string} storeId
     * @param {string} shopperId
     * @param {string} authToken
     * @return {Promise<void>}
     */
    deleteInstrument(storeId, shopperId, authToken) {
        const payload = { storeId, shopperId, authToken };

        return new Promise((resolve, reject) => {
            this._client.deleteShopperInstrument(payload, (error, response) => {
                if (error) {
                    reject(this._transformResponse(error));
                } else {
                    resolve(this._transformResponse(response));
                }
            });
        });
    }

    /**
     * @private
     * @param {Object} response
     * @return {Response<any>}
     */
    _transformResponse({ data: body, status, statusText }) {
        return {
            headers: {},
            body,
            status,
            statusText,
        };
    }
}
