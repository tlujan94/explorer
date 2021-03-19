import React from 'react';

export class Toolbar extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        this.state = {value: '2020-01-01'}
    }

    render() {
        return <div style={{height: '512px', width: '256px', backgroundColor: 'grey', float: 'left', color: 'white'}}>
            <form>
                <label>
                    Date:
                    <br/>
                    January 1, 2020
                </label>
            </form>
        </div>;
    }
}