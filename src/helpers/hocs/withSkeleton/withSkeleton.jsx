import Skeleton from "../../../components/skeleton/Skeleton";

function withSkeleton(Component, type, count) {
  function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...restProps} />;
  }

  const wrappedComponentName = Component.displayName || Component.name || "Component";

  WithSkeleton.displayName = `withSkeleton(${wrappedComponentName})`;

  return WithSkeleton;
}

export default withSkeleton;