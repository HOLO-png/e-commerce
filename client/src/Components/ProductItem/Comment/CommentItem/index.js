/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Comment, Tooltip, Avatar, Image } from 'antd';
import moment from 'moment';
import styled from 'styled-components';
import Actions from './Actions';
import EditItem from './EditItem';
import CommentItemProduct from './CommentItemProduct';

const UploadStyle = styled.div`
    .ant-image {
        margin-right: 10px;
    }
    .ant-comment-nested {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .ant-comment-nested {
        display: grid !important;
    }
    .ant-comment-content-detail {
        font-size: 16px;
        color: #646464;
    }
    .list-comment-item {
        height: 5px;
        overflow: hidden;
    }
    button.ant-btn.ant-btn-link {
        width: 50px;
    }
`;
function CommentItem(props) {
    const { comments, handleComments, user } = props;
    const [index, setIndex] = useState(null);
    const [idAuthor, setIdAuthor] = useState(null);

    const handleStatus = (item, key) => {
        setIndex(key);
        setIdAuthor(item.id_user);
    };

    const handleSetActiveCmt = () => {
        setIndex(null);
    };

    const handleSetIndex = (data) => {
        setIndex(data);
    };

    const CommentList = ({ comments }) =>
        comments.map((itemParent, key) => (
            <UploadStyle key={key}>
                <Comment
                    author={<a>{itemParent.author}</a>}
                    avatar={
                        <Avatar
                            src={itemParent.avatar}
                            alt={itemParent.author}
                        />
                    }
                    content={itemParent.content}
                    datetime={
                        itemParent.date ? (
                            <Tooltip title={itemParent.date}>
                                <span>{itemParent.datetime}</span>
                            </Tooltip>
                        ) : (
                            <Tooltip
                                title={moment().format('YYYY-MM-DD HH:mm:ss')}
                            >
                                <span>{itemParent.datetime}</span>
                            </Tooltip>
                        )
                    }
                >
                    <div
                        className="comment-actions"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'baseline',
                            transform: 'translateY(-10px)',
                        }}
                    >
                        <Actions
                            item={itemParent}
                            handleStatus={() => handleStatus(itemParent, key)}
                        />
                    </div>

                    <div
                        className="comment-actions"
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'baseline',
                            transform: 'translateY(-10px)',
                        }}
                    >
                        {/* {itemParent.orther.image.length
                            ? itemParent.orther.image.map((img, i) => (
                                  <Image
                                      key={i}
                                      width={200}
                                      src={img.thumbUrl}
                                  />
                              ))
                            : ''}
                        {itemParent.orther.video.length !== 0
                            ? itemParent.orther.video.map((data, i) => {
                                  console.log(data);
                                  return (
                                      data && (
                                          <div key={i}>
                                              <video width="400" controls>
                                                  <source src={data} />
                                              </video>
                                          </div>
                                      )
                                  );
                              })
                            : ''} */}
                    </div>
                    <CommentItemProduct itemParent={itemParent} />
                    {index === key ? (
                        <Comment
                            avatar={
                                <Avatar
                                    src={user.photoURL}
                                    alt={user.displayName}
                                />
                            }
                            content={
                                <EditItem
                                    idAuthor={idAuthor}
                                    handleSetIndex={handleSetIndex}
                                    handleComments={handleComments}
                                    itemParent={itemParent}
                                    handleSetActiveCmt={handleSetActiveCmt}
                                    user={user}
                                />
                            }
                        />
                    ) : (
                        ''
                    )}
                </Comment>
            </UploadStyle>
        ));
}

CommentItem.propTypes = {};

export default memo(CommentItem);
