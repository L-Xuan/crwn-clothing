// import React from "react";
// import { connect } from "react-redux";

// import collectionItem from "../../components/collection-item/collection-item.component";

// import { selectCollection } from "../../redux/shop/shop.selectors";

// import './collection.styles.scss';

// const CollectionPage = ({ collection }) => {
//     const { title, items } = collection;
//     return (
//     <div className="collection-page">
//         <h2 className="title">{ title }</h2>
//         <div className="items">
//           {items.map(item => (
//             <collectionItem key={item.id} item={item} />
//           ))}
//         </div>
//     </div>
// )};

// const mapStateToProps = ({ state, ownProps }) => ({
//     collection: selectCollection(ownProps.match.params.collectionId)(state)
// });

// export default connect(mapStateToProps)(CollectionPage);

import React from "react";

import CollectionItem from "../../components/collection-item/collection-item.component";

import "./collection.styles.scss";

const CollectionPage = (collection) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collection.collection.title}</h2>
      <div className="items">
        {collection.collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;