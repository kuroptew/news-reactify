import Skeleton from "../../../components/skeleton/Skeleton";
import { DirectionType, SkeletonType } from "../../../types";

export interface IPropsWithSkeleton {
  isLoading: boolean
}

export function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number,
  direction?: DirectionType
) {
  return function WithSkeleton(props: IPropsWithSkeleton & P) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

