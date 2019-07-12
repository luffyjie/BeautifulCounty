//
//  WeexImageDownloader.swift
//  JSFH
//
//  Created by zwj on 2019/6/19.
//  Copyright © 2019 BeautifulCounty. All rights reserved.
//

import UIKit

class WeexImageOperation: NSObject, WXImageOperationProtocol {

    var task: DownloadTask?
    
    func cancel() {
        task?.cancel()
    }
}

class WeexImageDownloader: NSObject, WXImgLoaderProtocol {
    
    func downloadImage(withURL url: String!, imageFrame: CGRect, userInfo options: [AnyHashable : Any]! = [:], completed completedBlock: ((UIImage?, Error?, Bool) -> Void)!) -> WXImageOperationProtocol! {
        let imageUrl = URL.init(string: url)
        let imageOperation = WeexImageOperation()
        DispatchQueue.main.async {
            let kfManager = KingfisherManager.shared;
            let task = kfManager.retrieveImage(with: imageUrl!) { result in
                switch result {
                case .success(let value):
                    if ((completedBlock) != nil) {
                        completedBlock(value.image, nil, true)
                    }
                case .failure(let error):
                    print(error)
                    completedBlock(nil, error, true)
                }
            }
            imageOperation.task = task
        }
        return imageOperation
    }
}
