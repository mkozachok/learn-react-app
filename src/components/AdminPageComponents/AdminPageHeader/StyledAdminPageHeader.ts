import styled from 'styled-components';

export const StyledAdminPageHeader = styled.div`
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        padding: 0;

        .trigger {
            padding: 0 20px;
            font-size: 20px;
        }
    }

    .header__right-content {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;

        .avatar {
            display: flex;
            align-items: center;

            &__name {
                margin-left: 8px;
                white-space: nowrap;
            }
        }

        &__item {
            padding: 0 12px;
            cursor: pointer;

            .anticon {
                font-size: 16px;
            }

            .anticon-bell {
                padding: 4px;
            }
        }
    }

    .ant-dropdown {
        .anticon {
            margin-right: 8px;
        }
    }
`
