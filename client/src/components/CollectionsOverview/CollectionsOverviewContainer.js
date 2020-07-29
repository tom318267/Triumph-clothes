import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectisCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../withSpinner/withSpinner";
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectisCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
