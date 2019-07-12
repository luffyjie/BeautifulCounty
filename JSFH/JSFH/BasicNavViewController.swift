//
//  BasicNavViewController.swift
//  JSFH
//
//  Created by zwj on 2019/6/19.
//  Copyright © 2019 BeautifulCounty. All rights reserved.
//

import UIKit

class BasicNavViewController: UINavigationController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor.white
        navigationController?.delegate = self
        interactivePopGestureRecognizer?.delegate = self as? UIGestureRecognizerDelegate
    }
    
    deinit {
        navigationController?.delegate = nil
    }
}

extension UINavigationController: UINavigationControllerDelegate {
    
    public func navigationController(_ navigationController: UINavigationController, willShow viewController: UIViewController, animated: Bool) {
        
        navigationController.setNavigationBarHidden(true, animated: true)
    }

    open override var childForStatusBarStyle: UIViewController? {
        return viewControllers.last
    }
    
    open override var childForStatusBarHidden: UIViewController? {
        return viewControllers.last
    }
}
