import {Icon, Table} from "antd";
import React, {memo} from "react";
import './Style.css';

function TokenTable(
    {
        deleteToken,
        tokens
    }
)
{

    const { Column } = Table;

    const onDelete = (e, key) => {
        e.preventDefault();
        deleteToken(key);
    };


    const columns = [
        {
            title: 'Token name',
            dataIndex: 'tokenName',
            fixed: 'left'
        },
        {
            title: 'Token ticker',
            dataIndex: 'ticker',
            fixed: 'left'
        },
        {
            title: 'Total supply',
            dataIndex: 'supply',
            fixed: 'left'
        },
        {
            title: 'Creation date',
            dataIndex: 'date',
            fixed: 'left'
        },
        {
            title: 'Issuer name',
            dataIndex: 'issuerName',
            fixed: 'left'
        },
        {
            title: 'Template',
            dataIndex: 'template',
            fixed: 'left',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            fixed: 'right',
            render: () => (
                <Icon type="delete" style={{color: '#56E8CD', fontSize: '1rem'}}
                      />

            )
        }
    ];

    return (
        <Table rowClassName="rows"
               size="medium"
               dataSource={tokens}
               rowKey={token => token.key}
        >
            {
                columns.map((column) =>
                    <Column key={column.dataIndex}
                            title={column.title}
                            dataIndex={column.dataIndex}
                            render={column.render}
                            align={column.align}

                    />
                )
            }
        </Table>
    )
}

export default memo(TokenTable);